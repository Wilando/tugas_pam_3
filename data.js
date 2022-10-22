const maskapai = [
      {
        maskapai_id: 1,
        maskapai_nama: "Travira Air",
        // maskapai_logo: require("../img/img1.jpg"),
      },
      {
        maskapai_id: 2,
        maskapai_nama: "Derazona Air Service",
        // maskapai_logo: require("../img/img1.jpg"),
      },
      {
        maskapai_id: 3,
        maskapai_nama: "Lion",
        // maskapai_logo: require("../img/img1.jpg"),
      },
      {
        maskapai_id: 4,
        maskapai_nama: "Indonesia Air",
        // maskapai_logo: require("../img/img1.jpg"),
      },
      {
        maskapai_id: 5,
        maskapai_nama: "Batik Air",
        // maskapai_logo: require("../img/img1.jpg"),
      },
    ]


const bandara = [
      {
        bandara_kode: 1,
        bandara_nama: "Bandara Soekarno-Hatta",
      },
      {
        bandara_kode: 2,
        bandara_nama: "Bandara I Gusti Ngurah Rai",
      },
      {
        bandara_kode: 3,
        bandara_nama: "Bandara Kualanamu",
      },
      {
        bandara_kode: 4,
        bandara_nama: "Bandara Internasional Yogyakarta",
      },
      {
        bandara_kode: 5,
        bandara_nama: "Bandara El Tari",
      },
    ]

const jadwal = [
      {
        jadwal_id: 1,
        bandara_kode_keberangkatan: 1,
        bandara_kode_tujuan: 2,
        maskapai_id: 3,
        tanggal: "Jumat, 15 Oktober 2022",
      },
      {
        jadwal_id: 2,
        bandara_kode_keberangkatan: 3,
        bandara_kode_tujuan: 4,
        maskapai_id: 5,
        tanggal: "Sabtu, 19 Oktober 2022",
      },
      {
        jadwal_id: 3,
        bandara_kode_keberangkatan: 1,
        bandara_kode_tujuan: 3,
        maskapai_id: 1,
        tanggal: "Selasa, 26 Oktober 2022",
      },
      {
        jadwal_id: 4,
        bandara_kode_keberangkatan: 4,
        bandara_kode_tujuan: 2,
        maskapai_id: 2,
        tanggal: "Senin, 14 Oktober 2022",
      },
      {
        jadwal_id: 5,
        bandara_kode_keberangkatan: 1,
        bandara_kode_tujuan: 5,
        maskapai_id: 4,
        tanggal: "jumat, 15 Oktober 2022",
      },
      {
        jadwal_id: 6,
        bandara_kode_keberangkatan: 2,
        bandara_kode_tujuan: 3,
        maskapai_id: 1,
        tanggal: "Selasa, 26 Oktober 2022",
      },
      {
        jadwal_id: 7,
        bandara_kode_keberangkatan: 2,
        bandara_kode_tujuan: 3,
        maskapai_id: 1,
        tanggal: "Senin, 14 Oktober 2022",
      },
      {
        jadwal_id: 8,
        bandara_kode_keberangkatan: 1,
        bandara_kode_tujuan: 2,
        maskapai_id: 1,
        tanggal: "Jumat, 15 Oktober 2022",
      },
      {
        jadwal_id: 9,
        bandara_kode_keberangkatan: 1,
        bandara_kode_tujuan: 2,
        maskapai_id: 4,
        tanggal: "Jumat, 15 Oktober 2022",
      },
    ]

export {maskapai, bandara, jadwal};