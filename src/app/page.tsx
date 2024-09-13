import styles from "./page.module.scss";
import Image from "next/image";

import jkpizzarialogo from '/public/jkpizzarialogo.svg'
import Link from "next/link";

export default function Page() {

  async function handleLogin(formData: FormData){
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

  }

  // if(email === '' || password ===''){
  //   return;
  // }
  // try {
  //   const response = await api.post('/session')
  // }

  return (
    <>
    <div className={styles.containerCenter}>
      <label>JK Pizzaria</label>
      <Image src={jkpizzarialogo} alt="Logo Jk Pizzaria" />

      <div className={styles.login}>
        <form action={handleLogin} >
          <input
            placeholder="Digite seu email"
            className={styles.input}
            type="email"
            name="email"
            required
          />

          <input
            placeholder="Digite sua senha..."
            className={styles.input}
            type="password"
            name="password"
            required
          />
          
          <button type="submit" className={styles.button}>
            Acessar
          </button>
        </form>
        
        <Link href="/signup" className={styles.text}>
           Nao possui uma conta? Cadastre-se
        </Link>

      </div>
    </div>
    </>
    
  )

}
