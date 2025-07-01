import React , { useEffect, useState }from 'react';
import { useRouter } from 'next/router';
import Page from '../components/page';
import { server } from '../config';
import axiosInstance from '../lib/axiosInstance';

const Tentang = ({ data }) => {
  const router = useRouter();
  let lctx = router.asPath.slice(1).split('/');
  let ttl;
  if(lctx[1] == 'visi_misi') {ttl = "Visi Misi"}
  else if(lctx[1] == 'dasar_hukum') {ttl = "Dasar Hukum"}
  else if(lctx[1] == 'struktur') {ttl = "Struktur Organisasi"}
  else if(lctx[1] == 'tentang') {ttl = "Tentang JDIH"}
  else if(lctx[1] == 'sop') {ttl = "SOP JDIH"}
  const [mdata, setmdata] = useState(data);

  useEffect(() => {
    let el = document.createElement('div');
        el.innerHTML = mdata
        el.querySelectorAll('img').forEach(async (imgEl) => {
          let j_img = imgEl.src.split('/').filter(Boolean);
          let jd_img = j_img[4]+'.'+j_img[5];
          await fetch(`${server}/api/imgtinymce?img=`+jd_img, {
            method: 'GET',
            headers: { 'Accept': '*/*' }
          })
          .then(response => response.blob())
          .then(images => {
            let outside = URL.createObjectURL(images)
            imgEl.src = outside; 
            setmdata(el.innerHTML)
          })
          .catch(error => {
              // console.log(error)
          });
          })
    }, []);
    return(
    <div>
    <Page title={ttl}>
    <section className="awlAtsdibahbar mt-5 pt-5">
        <div className="card card-cascade narrower">
        <div className="view view-cascade gradient-card-header light-blue lighten-1 text-white ml-0">
        <h5 className="h5-responsive mb-0 pl-2">{ttl}</h5>
        </div>
        <div className="card-body pt-4 pr-0 pl-0 pb-0">
        <div className="col-xl-12 col-lg-12 col-md-12 row pt-3" style={{textAlign: 'justify', textJustify: 'newspaper'}}>
        {"" != data ? (
        <div style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: mdata }}></div>
        ): (
        <p>{ttl} Masih Kosong</p>
        )}
        </div>
        </div>
        </div>
        </section>
    </Page>
    </div>
    )
}

export async function getServerSideProps(context) {
      const { query } = context;
      const getcnt = query.q;
      const resOpt = {ket: getcnt}
    const response = await axiosInstance.post('/api/tentang', resOpt);
    const isidata = await response.data;
    let is_data;
    if (!isidata[getcnt]) {
        is_data = "";
    } else {
        is_data = isidata[getcnt];
    }
    return { props: { data: is_data } };
}

export default Tentang
