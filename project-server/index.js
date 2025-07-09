require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${[process.env.DB_NAME]}:${process.env.DB_PASS}@cluster0.lum0bq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
     const database = client.db("JobPOrtal").collection("JobCollect");
     const JobApplicentCollection = client.db("JobPOrtal").collection("JobApplicent");

     app.get('/job',async (req,res)=>{
        const quary = database.find()
        const result = await quary.toArray()
        res.send(result)
     })

     app.get('/job/:id',async (req,res)=>{
        const id = req.params.id 
        const quari = {_id: new ObjectId(id)}
        const result = await database.findOne(quari)
        res.send(result)
     })

    //  job applyer aplicent 
    app.post('/jobApplicent', async (req,res)=>{
      const applicent = req.body 
      const result = await JobApplicentCollection.insertOne(applicent)
      res.send(result)
    })

    app.get('/jobApplicent',async(req,res)=>{
       const email = req.query.email 
       const quary = { Applicent_email: email }
       const result = await JobApplicentCollection.find(quary).toArray()
       
       for(const applpication of result){
        console.log(applpication.job_id);
        const quari1 = {_id: new ObjectId(applpication.job_id)}
        const job = await database.findOne(quari1)
        if(job){
          applpication.title = job.title
          applpication.company = job.company
          applpication.location = job.location
          applpication.company_logo = job.company_logo
        }
       }
       res.send(result)
    })

     app.delete('/jobApplicent/:id', async(req,res)=>{
      const id = req.params.id 
      const query = { _id: new ObjectId(id) };
      const result = await JobApplicentCollection.deleteOne(query);
      res.send(result)
    })
     
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
