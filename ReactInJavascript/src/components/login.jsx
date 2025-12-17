import react from "react";


export function Login(){


   return(
    <>
    <form action="/">
        <input type="text" value={FullName}/> Full Name;
        <input type="email" value={email}/> E-mail;
        <input type="password" value={password}/> password;
    </form>
    </>
   )
}