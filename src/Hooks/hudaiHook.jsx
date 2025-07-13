import { useEffect, useState } from "react"
import useBaseUrl from "./useBaseUrl"

const hudaiHook = () => {
    const instance =useBaseUrl()
    const [dta,setDta] = useState()

    useEffect(()=>{
        instance.get(`/emaol`)
        .then(res => setDta(res.data))
    },[instance])

  return dta ;
}

export default hudaiHook