import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/success.module.scss";
function SuccessPage() {
  return (
    <div>
      <Head>
        <title>Paiement réussi.</title>
      </Head>
      <div className={""}>
        <div className={styles._successPage}>
          <div className={styles._successPage_child}>
            <div className={styles._successPage_child_container}>
              <div>
                <img
                  src="/Successful-purchase-pana.svg"
                  width="500"
                  height="300"
                  alt="Paiement réussi"
                  title="Paiement réussi"
                />
              </div>
              <div>
                <p>Le paiement a été effectué avec succès.</p>
              </div>
              <div>
                <Link href="/">
                  <button>À L&apos;accueil</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
