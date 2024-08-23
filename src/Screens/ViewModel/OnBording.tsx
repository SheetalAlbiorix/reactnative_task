import { useState } from "react"

export const loginModel = () => {
    const [first, setfirst] = useState<String>("")
    const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

    function abc() {

    }

    const abdbsbs = (newone:String) => {
        setfirst(newone)
    }

    const handleLogin = () => {
        if (userName == 'admin'){
            
        }
      };

    return {
        abc,
        abdbsbs,
        first,
        handleLogin
    }
}


