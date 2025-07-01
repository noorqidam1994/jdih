import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import Page from "../components/page";
import cookiee from "js-cookie";
import axiosInstance from "../lib/axiosInstance";
import CustomLoadingScreen from "../components/Loading-screeen";
import { server } from "../config";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const AmChartKategori = dynamic(
  () => import("../components/Grafikprodukhukum"),
  { ssr: false }
);
const AmChartStatus = dynamic(() => import("../components/Matrikchart"), {
  ssr: false,
});
const AmChartTren = dynamic(() => import("../components/Trengrafik"), {
  ssr: false,
});
const ReactImageVideoLightbox = dynamic(() => import("../public/imagevideo"), {
  ssr: false,
});

const index = ({ data }) => {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);
  const [dperaturan] = useState(data.terbaru.data);
  const [headtable] = useState(data.atsHead.data);
  const [readDatatable] = useState(data.isiTable.result);
  const [listGaleri, setlistGaleri] = useState([]);
  const [lightboxOpen, setlightboxOpen] = useState(false);
  let idLocale = require("moment/locale/id");
  moment.updateLocale("id", idLocale);

  console.log(data);
  useEffect(() => {
    data?.isidatagaleri[0]?.img?.forEach(function (i) {
      listImages(i.file, data?.isidatagaleri[0]?.id, i.ext);
    });
  }, []);

  const handleClickClose = (cls) => {
    $("#sepokberanda").val("");
    $(".s-btn-close").hide();
  };

  const handleClickbtnSearch = (csp) => {
    cookiee.set("inji_jns", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("jns_x", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("thn_x", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("stt", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("stsstt", "semua", { secure: true, expires: 7, path: "/" });
    cookiee.set("jns_unyin", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("thn_unyin", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("totalDjenis", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("totalDtahun", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("pagex", 1, { secure: true, expires: 7, path: "/" });
    let link = $("#sepokberanda")
      .val()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("+");
    router.push("/produk-hukum/All/" + link);
  };

  const onKeyPressSearch = (x) => {
    let link = x.target.value
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("+");
    $("#sepokberanda").val(x.target.value);
    if (x.keyCode === 13) {
      cookiee.set("jns_x", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("thn_x", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("stt", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("stsstt", "semua", { secure: true, expires: 7, path: "/" });
      cookiee.set("jns_unyin", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("thn_unyin", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("totalDjenis", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("totalDtahun", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("pagex", 1, { secure: true, expires: 7, path: "/" });
      router.push("/produk-hukum/All/" + link);
      x.preventDefault();
    }
    if (x.target.value === "") {
      $(".s-btn-close").hide();
    } else {
      $(".s-btn-close").show();
    }
  };

  function clickDetailEvent(j, n, t, tt) {
    let noSlash = n?.split("/").join("+");
    let glr = tt?.toUpperCase().split(" ").join("+").split("/").join("-");

    cookiee.set("akuksearch", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("stsstt", "Semua", { secure: true, expires: 7, path: "/" });

    return `/detail/${j}/${noSlash}/${t}/${glr}`;
  }

  function listImages(f, fl, ext, img1) {
    fetch(`${server}/api/galeri/cariimg?img=` + f + `&fl=` + fl + `&v=` + ext, {
      method: "GET",
      headers: { Accept: "*/*" },
    })
      .then((response) => response.blob())
      .then((images) => {
        let outside = URL.createObjectURL(images);
        if (ext === "photo") {
          let img = document.createElement("img");
          img.src = outside;
          img.id = ext;
          document.getElementById(fl).appendChild(img);
        } else {
          let vid = document.createElement("video");
          vid.src = outside;
          vid.id = ext;
          document.getElementById(fl).appendChild(vid);
        }
      })
      .catch((error) => {
        // console.log(error)
      });
  }

  function clickDetailEventgaleri(id) {
    const imgs = document.getElementById(id).getElementsByTagName("img");
    const vids = document.getElementById(id).getElementsByTagName("video");
    const allImgs = [];
    imgs.forEach((img) =>
      allImgs.push({ url: img.src, type: img.id, altTag: "" })
    );
    vids.forEach((vid) =>
      allImgs.push({ url: vid.src, type: vid.id, altTag: "" })
    );
    setlistGaleri(allImgs);
    setlightboxOpen(true);
  }

  const handleClickView = async function (id, v, lht) {
    window.open(`${server}/api/ebook/pdf?fl=${id}&f=${v}`);
  };

  return (
    <div>
      {showLoading && <CustomLoadingScreen />}
      <Page title="Beranda">
        <section>
          <div className="sepok">
            <div className="gmbarAwal">
              <img src="/img/jdihsetneg.png" className="imgLogo" alt="" />
            </div>
            <div className="search-box">
              <form
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="form-control"
                  autoFocus
                  id="sepokberanda"
                  placeholder="Cari data produk hukum..."
                  style={{ fontSize: "1.2rem" }}
                  type="text"
                  onKeyDown={onKeyPressSearch}
                  autoComplete="off"
                />
                <button
                  className="search-btn s-btn-close s_beranda pt-1"
                  onClick={handleClickClose}
                >
                  <i className="fas fa-times"></i>
                </button>
                <button
                  className="search-btn s_beranda pt-1"
                  onClick={handleClickbtnSearch}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="gtco-testimonials mt-1">
              <OwlCarousel
                className="owl-theme"
                loop
                autoplay
                center
                margin={0}
                nav
                responsive={{
                  0: { items: 1 },
                  680: { items: 3 },
                  1000: { items: 5 },
                }}
                navText={[
                  '<i class="fas fa-angle-left fa-2x"></i>',
                  '<i class="fas fa-angle-right fa-2x"></i>',
                ]}
              >
                {undefined !== dperaturan && 0 < dperaturan.length ? (
                  dperaturan.map((d, k) => {
                    console.log(JSON.stringify(d));
                    return (
                      <div key={d.idperaturan} id={d.idperaturan}>
                        <div className="card">
                          <div className="card-body cardbodystyle">
                            <Link
                              className="pl-1 pr-1 pt-1 pb-1 ml-0 mr-0 jdlAtas"
                              href={clickDetailEvent(
                                d.jns,
                                d.no_peraturan,
                                d.tahun,
                                d.tentang
                              )}
                            >
                              <p className="group inner list-group-item-text pstyle d1">
                                {d.nama_jenis.toUpperCase()}
                              </p>
                              <p className="group inner list-group-item-text pstyle d2">
                                NOMOR {d.no_peraturan} TAHUN {d.tahun}
                              </p>
                              <p className="group inner list-group-item-text d4">
                                {d.tentang?.toLowerCase()}
                              </p>
                            </Link>
                          </div>
                          <div className="card-footer text-muted mt-1 pt-1 pb-1 pl-2 pr-2 text-center">
                            <Link
                              className="d_t_l _span_1 _c_span_ tooltipx"
                              data-original-title="Detail Peraturan"
                              href={clickDetailEvent(
                                d.jns,
                                d.no_peraturan,
                                d.tahun,
                                d.tentang
                              )}
                            >
                              <button
                                className="btn-blue-grey waves-effect waves-light btn btn-md"
                                type="submit"
                              >
                                DETAIL
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h5 className="mt-4 col-md-12 text-center">
                    Peraturan Terbaru Kosong...
                  </h5>
                )}
              </OwlCarousel>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="services section light-background mt-5 mb-5"
        >
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                // data-aos="fade-up"
                // data-aos-delay="100"
              >
                <div className="card card-cascade narrower">
                  <div className="view view-cascade gradient-card-header light-blue lighten-1 text-white">
                    <h5 className="h5-responsive mb-0 pl-2">
                      Grafik Status Produk Hukum
                    </h5>
                  </div>
                  <div className="card-body pt-0 pr-0 pl-0 pb-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 row">
                      <AmChartStatus dchart={{ readDatatable, headtable }} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
                <div className="card card-cascade narrower">
                  <div className="view view-cascade gradient-card-header light-blue lighten-1 text-white">
                    <h5 className="h5-responsive mb-0 pl-2">
                      Grafik Kategori Produk Hukum
                    </h5>
                  </div>
                  <div className="card-body pt-0 pr-0 pl-0 pb-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 row">
                      <AmChartKategori dchart={{ headtable }} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                // data-aos="fade-up"
                // data-aos-delay="300"
              >
                <div className="card card-cascade narrower">
                  <div className="view view-cascade gradient-card-header light-blue lighten-1 text-white">
                    <h5 className="h5-responsive mb-0 pl-2">
                      Tren Produk Hukum
                    </h5>
                  </div>
                  <div className="card-body pt-0 pr-0 pl-0 pb-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 row">
                      <AmChartTren dchart={{ headtable }} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-12 col-md-12"
                // data-aos="fade-up"
                // data-aos-delay="400"
              >
                <div className="card card-cascade narrower">
                  <div className="view view-cascade gradient-card-header light-blue lighten-1 text-white">
                    <h5 className="h5-responsive mb-0 pl-2">
                      Informasi Lainnya
                    </h5>
                  </div>
                  <div className="card-body pt-0 pr-0 pl-0 pb-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 row">
                      <div
                        className="col-lg-4 col-md-6"
                        // data-aos="fade-up"
                        // data-aos-delay="500"
                      >
                        <h5 className="h5-responsive mb-1 mt-3 pl-2">
                          Infografis
                        </h5>
                      </div>
                      <div
                        className="col-lg-4 col-md-6"
                        // data-aos="fade-up"
                        // data-aos-delay="500"
                      >
                        <h5 className="h5-responsive mb-1 mt-3 pl-2">Galeri</h5>
                        <div className="card col-xl-12 col-lg-12 col-md-12 mb-3 mt-3 g_leri">
                          <div
                            className="view overlay"
                            id="photos"
                            onClick={() =>
                              clickDetailEventgaleri(data.isidatagaleri[0]?.id)
                            }
                          >
                            <div id={data.isidatagaleri[0]?.id}></div>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              <div className="mask rgba-white-slight waves-effect waves-light"></div>
                            </a>
                          </div>
                          <div
                            className="card-body pt-0 pl-2 pr-2 pb-0"
                            style={{ background: "#e3e7e7" }}
                          >
                            <h6 className="card-title text-center mb-0">
                              {data?.isidatagaleri[0]?.judul}
                            </h6>
                          </div>
                          <div className="rounded-bottom mdb-color lighten-3 text-center text-white numbersxx">
                            <i className="far fa-clock pr-1"></i>
                            {moment(data?.isidatagaleri[0]?.tgl).format("LLL")}
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-4 col-md-6"
                        // data-aos="fade-up"
                        // data-aos-delay="500"
                      >
                        <h5 className="h5-responsive mb-1 mt-3 pl-2">E-book</h5>
                        <ul className="grid" id="listEbook">
                          <li>
                            <div className="grid_a">
                              <p
                                id="judul"
                                className="line-clamp line-clamp-6"
                                title={data.isiebook.data[0]?.judul}
                              >
                                {data.isiebook.data[0]?.judul}
                              </p>
                              <div className="ket">
                                <i
                                  className="fas fa-search"
                                  aria-hidden="true"
                                ></i>{" "}
                                {data.isiebook.data[0]?.lihat}{" "}
                                <span id="ket_jrk">Dilihat</span>
                              </div>
                              <div className="ket">
                                <i
                                  className="fas fa-download"
                                  aria-hidden="true"
                                ></i>{" "}
                                {data.isiebook.data[0]?.unduh}{" "}
                                <span id="ket_jrk">Diunduh</span>
                              </div>
                              <div className="ket">
                                <i
                                  className="fas fa-file"
                                  aria-hidden="true"
                                ></i>{" "}
                                {data.isiebook.data[0]?.page}{" "}
                                <span id="ket_jrk">Page</span>
                              </div>
                              <div
                                className="view_icn"
                                onClick={() =>
                                  handleClickView(
                                    data.isiebook.data[0]?.idebook,
                                    data.isiebook.data[0]?.file_jj[0],
                                    data.isiebook.data[0]?.lihat
                                  )
                                }
                              >
                                <i className="fas fa-file-pdf"></i> LIHAT
                              </div>
                            </div>
                            <div className="grid_b">
                              <div className="view_icn">
                                <i className="fas fa-file-pdf"></i> UNDUH
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {lightboxOpen && (
          <ReactImageVideoLightbox
            data={listGaleri}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => setlightboxOpen(false)}
            onNavigationCallback={(currentIndex) => console.log()}
          />
        )}
      </Page>
    </div>
  );
};

export async function getTahunPeraturan(arrID) {
  const resOpt = {
    ket: "dibah",
    arrID: arrID,
  };
  const res_p = await axiosInstance.post("/api/hukumproduk/apimatriks", resOpt);
  if (res_p.status === 500) {
    return { result: [] };
  } else {
    const isi = await res_p.data;
    let jdisi = [];
    if (isi.data !== undefined && isi.data && isi.data.length > 0) {
      const groupedMap = isi.data.reduce(
        (entryMap, e) =>
          entryMap.set(e.tahun, [...(entryMap.get(e.tahun) || []), e]),
        new Map()
      );
      jdisi = Array.from(groupedMap).map(([name, value]) => ({ name, value }));
    }
    let limitData = jdisi ? jdisi.slice(0, 20) : [];
    return { result: limitData };
  }
}

export async function getPeraturan(
  plh,
  loc,
  srh,
  crnPg,
  lmtDt,
  checkJ,
  checkT,
  sttx
) {
  let tentang = srh,
    p_lihan = plh,
    jns = checkJ,
    thn = checkT,
    status = sttx,
    terx = loc,
    length = lmtDt,
    start = (crnPg - 1) * lmtDt;
  const resOpt = {
    tentang: tentang,
    p_lihan: p_lihan,
    jns: jns,
    thn: thn,
    status: status,
    terx: terx,
    length: length,
    start: start,
  };
  const res_p = await axiosInstance.post(
    "/api/hukumproduk/produkhukum",
    resOpt
  );
  if (res_p.status === 500) {
    return { data: "", jml: "" };
  } else {
    return res_p.data;
  }
}

export async function getServerSideProps(context) {
  try {
    const arrID = [];
    const resOpt = {
      ket: "hadap",
    };

    const response = await axiosInstance.post(
      "/api/hukumproduk/apimatriks",
      resOpt
    );
    const atsHead = await response.data;

    for (let item of atsHead.data || []) {
      arrID.push(item.idjenis);
    }

    const resgaleri = await axiosInstance.post("/api/galeri/data_glr", {
      ket: "",
    });
    const isidatagaleri = await resgaleri.data;

    const res_p = await axiosInstance.post("/api/ebook/listebook", { k: "" });
    const isiebook = await res_p.data;

    const isiTable = await getTahunPeraturan(arrID);
    const [terbaru] = await Promise.all([
      getPeraturan("semua", "Terbaru", "", 1, 9, "", "", ""),
    ]);
    
    // Ensure all data is serializable by providing fallbacks
    const data = {
      terbaru: terbaru || { data: [], jml: 0 },
      atsHead: atsHead || { data: [] },
      isiTable: isiTable || { result: [] },
      isidatagaleri: isidatagaleri || [],
      isiebook: isiebook || { data: [] }
    };

    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    // Return fallback data if there's an error
    return {
      props: {
        data: {
          terbaru: { data: [], jml: 0 },
          atsHead: { data: [] },
          isiTable: { result: [] },
          isidatagaleri: [],
          isiebook: { data: [] }
        },
      },
    };
  }
}

export default index;
