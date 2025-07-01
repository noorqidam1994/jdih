import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cookiee from "js-cookie";

const Navbar = () => {
  const router = useRouter();
  let lctx = router.asPath.slice(1).split("/");

  useEffect(() => {
    if (lctx[0] === "produk-hukum" && lctx[1] === "") {
      router.push("/produk-hukum/All", undefined, { shallow: true });
    }
    if (lctx[0] === "produk-hukum" && lctx[1] === undefined) {
      router.push("/produk-hukum/All", undefined, { shallow: true });
    }
  });

  const handleClickMenuNav = (s) => {
    let arrJns = [];
    cookiee.set("jns_x", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("thn_x", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("inji_jns", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("jns_unyin", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("thn_unyin", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("totalDjenis", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("totalDtahun", "", { secure: true, expires: 7, path: "/" });
    cookiee.set("akuksearch", "");
    if (s.target.getAttribute("data-hover") === "Peraturan") {
      arrJns.push("PERPU", "PP", "PERPRES", "PERMENSESNEG");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/produk-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Keputusan") {
      arrJns.push("KEPRES", "KEPMENSESNEG");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/produk-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Instruksi") {
      arrJns.push("INPRES");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/produk-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "PKS") {
      arrJns.push("PKS");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/produk-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "MOU") {
      arrJns.push("MOU");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/produk-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "MA") {
      arrJns.push("Putusan MA");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/putusan-pengadilan/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "MK") {
      arrJns.push("Putusan MK");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/putusan-pengadilan/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Pengadilan") {
      arrJns.push("Putusan Pengadilan");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/putusan-pengadilan/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Bawaslu") {
      arrJns.push("Putusan Bawaslu");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/putusan-pengadilan/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "KIP") {
      arrJns.push("Putusan KIP");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/putusan-pengadilan/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Yurisprudensi") {
      arrJns.push("Yurisprudensi");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/putusan-pengadilan/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Buku") {
      arrJns.push("Buku Hukum");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Naskah") {
      arrJns.push("Naskah Akademik");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Analisa") {
      arrJns.push("Analisa dan Evaluasi");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Kajian") {
      arrJns.push("Kajian Penelitian");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Himpunan") {
      arrJns.push("Himpunan");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Rancangan") {
      arrJns.push("Rancangan PUU");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Risalah") {
      arrJns.push("Risalah Rapat");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Skripi") {
      arrJns.push("Skripi/Tesis/Desertasi");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/monografi-hukum/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Hukum") {
      arrJns.push("Artikel Hukum");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/artikel/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Ilmiah") {
      arrJns.push("Artikel Ilmiah");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/artikel/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Tulis") {
      arrJns.push("Karya Tulis");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/artikel/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "Koran") {
      arrJns.push("Kliping Koran");
      cookiee.set("inji_jns", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      cookiee.set("jns_x", arrJns.join(","), {
        secure: true,
        expires: 7,
        path: "/",
      });
      router.push("/artikel/All", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "visi_misi") {
      router.push("/tentangkami/visi_misi", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "dasar_hukum") {
      router.push("/tentangkami/dasar_hukum", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "struktur") {
      router.push("/tentangkami/struktur", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "tentang") {
      router.push("/tentangkami/tentang", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "sop") {
      router.push("/tentangkami/sop", undefined, { shallow: true });
    } else if (s.target.getAttribute("data-hover") === "ebook") {
      cookiee.set("inji_jns", "", { secure: true, expires: 7, path: "/" });
      cookiee.set("jns_x", "", { secure: true, expires: 7, path: "/" });
      router.push("/ebook", undefined, { shallow: true });
    }
    s.preventDefault();
  };

  return (
    <header
      id="header"
      className="header mask d-flex align-items-center sticky-top"
    >
      <div className="container position-relative d-flex align-items-center">
        <div className="logo d-flex align-items-center me-auto">
          <a href="https://jdihn.go.id/" target="blank">
            <img src="/img/jdihn.png" className="imgAtas" alt="" />
          </a>
          <a href="https://www.setneg.go.id/" target="blank">
            <img src="/img/lambang.png" className="imgAtas" alt="" />
          </a>
          <span className="glrKemen">
            Kementerian Sekretariat Negara
            <br />
            Republik Indonesia
          </span>
        </div>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>Beranda</a>
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Tentang Kami</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a data-hover="visi_misi" onClick={handleClickMenuNav}>
                    Visi Misi
                  </a>
                </li>
                <li>
                  <a data-hover="dasar_hukum" onClick={handleClickMenuNav}>
                    Dasar Hukum
                  </a>
                </li>
                <li>
                  <a data-hover="struktur" onClick={handleClickMenuNav}>
                    Struktur Organisasi
                  </a>
                </li>
                <li>
                  <a data-hover="tentang" onClick={handleClickMenuNav}>
                    Tentang JDIH
                  </a>
                </li>
                <li>
                  <a data-hover="sop" onClick={handleClickMenuNav}>
                    SOP JDIH
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Produk Hukum</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li className="dropdown">
                  <a>
                    <span>Peraturan/Instrumen</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a data-hover="Peraturan" onClick={handleClickMenuNav}>
                        Peraturan
                      </a>
                    </li>
                    <li>
                      <a data-hover="Keputusan" onClick={handleClickMenuNav}>
                        Keputusan
                      </a>
                    </li>
                    <li>
                      <a data-hover="Instruksi" onClick={handleClickMenuNav}>
                        Instruksi
                      </a>
                    </li>
                    <li>
                      <a data-hover="Surat Edaran" onClick={handleClickMenuNav}>
                        Surat Edaran
                      </a>
                    </li>
                    <li>
                      <a data-hover="PKS" onClick={handleClickMenuNav}>
                        PKS
                      </a>
                    </li>
                    <li>
                      <a data-hover="MOU" onClick={handleClickMenuNav}>
                        MOU
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a>
                    <span>Putusan Pengadilan</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a data-hover="MA" onClick={handleClickMenuNav}>
                        Putusan MA
                      </a>
                    </li>
                    <li>
                      <a data-hover="MK" onClick={handleClickMenuNav}>
                        Putusan MK
                      </a>
                    </li>
                    <li>
                      <a data-hover="Pengadilan" onClick={handleClickMenuNav}>
                        Putusan Pengadilan
                      </a>
                    </li>
                    <li>
                      <a data-hover="Bawaslu" onClick={handleClickMenuNav}>
                        Putusan Bawaslu
                      </a>
                    </li>
                    <li>
                      <a data-hover="KIP" onClick={handleClickMenuNav}>
                        Putusan KIP
                      </a>
                    </li>
                    <li>
                      <a
                        data-hover="Yurisprudensi"
                        onClick={handleClickMenuNav}
                      >
                        Yurisprudensi
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a>
                    <span>Monografi Hukum</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a data-hover="Buku" onClick={handleClickMenuNav}>
                        Buku Hukum
                      </a>
                    </li>
                    <li>
                      <a data-hover="Naskah" onClick={handleClickMenuNav}>
                        Naskah Akademik
                      </a>
                    </li>
                    <li>
                      <a data-hover="Analisa" onClick={handleClickMenuNav}>
                        Analisa dan Evaluasi
                      </a>
                    </li>
                    <li>
                      <a data-hover="Kajian" onClick={handleClickMenuNav}>
                        Kajian Penelitian
                      </a>
                    </li>
                    <li>
                      <a data-hover="Himpunan" onClick={handleClickMenuNav}>
                        Himpunan
                      </a>
                    </li>
                    <li>
                      <a data-hover="Rancangan" onClick={handleClickMenuNav}>
                        Rancangan PUU
                      </a>
                    </li>
                    <li>
                      <a data-hover="Risalah" onClick={handleClickMenuNav}>
                        Risalah Rapat
                      </a>
                    </li>
                    <li>
                      <a data-hover="Skripi" onClick={handleClickMenuNav}>
                        Skripi/Tesis/Desertasi
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a>
                    <span>Artikel Hukum</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a data-hover="Hukum" onClick={handleClickMenuNav}>
                        Artikel Hukum
                      </a>
                    </li>
                    <li>
                      <a data-hover="Ilmiah" onClick={handleClickMenuNav}>
                        Artikel Ilmiah
                      </a>
                    </li>
                    <li>
                      <a data-hover="Tulis" onClick={handleClickMenuNav}>
                        Karya Tulis
                      </a>
                    </li>
                    <li>
                      <a data-hover="Koran" onClick={handleClickMenuNav}>
                        Kliping Koran
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Informasi Lain</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <Link href="/infografis" legacyBehavior>
                    <a>Infografis</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ebook" legacyBehavior>
                    <a>E-book</a>
                  </Link>
                </li>
                <li>
                  <Link href="/galeri" legacyBehavior>
                    <a>Galeri</a>
                  </Link>
                </li>
                <li>
                  <Link href="/grafikstatistik" legacyBehavior>
                    <a>Grafik Statistik</a>
                  </Link>
                </li>
                <li>
                  <Link href="/matriks" legacyBehavior>
                    <a>Matrik Peraturan</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Lainnya</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/kontak" legacyBehavior>
                <a>Kontak Kami</a>
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
      <button
        type="button"
        className="btn btn-danger btn-floating waves-effect waves-light btn-sm"
        id="btn-back-to-top"
      >
        <i
          className="fas fa-arrow-up"
          style={{ padding: "0 1.2rem 0 0", fontSize: "1.3rem" }}
        ></i>
      </button>
    </header>
  );
};

export default Navbar;
