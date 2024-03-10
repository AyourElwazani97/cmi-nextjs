import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/failed.module.scss";
function FailedPage() {
  return (
    <div>
      <Head>
        <title>Paiment échoué</title>
      </Head>
      <div className={""}>
        <div className={styles._failedPage}>
          <div className={styles._failedPage_child}>
            <div className={styles._failedPage_child_container}>
              <div>
                <img
                  src="/failed.svg"
                  width="500"
                  height="300"
                  alt="paiment échoué"
                  title="paiment échoué"
                />
              </div>
              <div>
                <p>Le paiement a échoué...</p>
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

export default FailedPage;
