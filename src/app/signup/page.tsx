import Link from "next/link";
import jkpizzarialogo from "./public/jkpizzarialogo.svg"
import styles from "./page.module.scss";
import Image from "next/image";

export default function Signup() {

    async function handleRegister(formData: FormData){
        "use server"
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
    
    }

    return (
        <>
            <div className={styles.containerCenter}>
                <label>JK Pizzaria</label>
                <Image src={jkpizzarialogo} alt="Logo Jk Pizzaria" />
                <div className={styles.login}>
                    <h1>Criando uma conta</h1>
                    <form action={handleRegister} >
                        <input
                            placeholder="Digite seu nome"
                            className={styles.input}
                            type="text"
                            name="nome"
                            required
                        />

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
                            Cadastrar
                        </button>
                    </form>

                    <Link href="/" className={styles.text}>
                        Já possui uma conta? Faça login
                    </Link>

                </div>
            </div>
        </>

    )

}