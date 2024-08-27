import { useState } from "react"

export const loginModel = () => {
    const [first, setfirst] = useState<String>("")

    function abc() {

    }

    const abdbsbs = (newone:String) => {
        setfirst(newone)
    }

    return {
        abc,
        abdbsbs,
        first
    }
}


