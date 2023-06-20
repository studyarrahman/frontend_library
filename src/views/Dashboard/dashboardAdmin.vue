<template>
  <div class="container my-5">
    <div class="mb-5">
      <h1 class="text-center">CRUD Operation buku</h1>
      <hr />
    </div>
    <!-- Button trigger modal -->
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Tambah buku
      </button>
    </div>

    <!-- Modal Insert -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Data</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input class="form-control" type="text" v-model="insertKode" placeholder="kode" aria-label="default input example" /><br />
            <input class="form-control" type="text" v-model="insertKodeKategori" placeholder="kode_kategori" aria-label="default input example" /><br />
            <input class="form-control" type="text" v-model="insertJudul" placeholder="judul" aria-label="default input example" /><br />
            <input class="form-control" type="text" v-model="insertPengarang" placeholder="pengarang" aria-label="default input example" /><br />
            <input class="form-control" type="text" v-model="insertPenerbit" placeholder="penerbit" aria-label="default input example" /><br />
            <input class="form-control" type="text" v-model="insertTahun" placeholder="tahun" aria-label="default input example" /><br />
            <input class="form-control" type="date" v-model="insertTanggalInput" placeholder="tanggal_input" aria-label="default input example" /><br />
            <input class="form-control" type="text" v-model="insertHarga" placeholder="harga" aria-label="default input example" /><br />
            
            <div class="mb-3">
              <input class="form-control" type="file" ref="file" id="formFile" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="button" class="btn btn-primary" v-on:click="postbuku()">Tambah buku</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="table-responsive">
      <table class="table border">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Kode</th>
            <th scope="col">Kode Kategori</th>
            <th scope="col">Judul</th>
            <th scope="col">Pengarang</th>
            <th scope="col">Penerbit</th>
            <th scope="col">Tahun</th>
            <th scope="col">Tanggal Input</th>
            <th scope="col">Harga</th>
            <th scope="col">Cover</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in buku" :key="data.kode">
            <td>{{ index + 1 }}</td>
            <td>{{ data.kode }}</td>
            <td>{{ data.kode_kategori }}</td>
            <td>{{ data.judul }}</td>
            <td>{{ data.pengarang }}</td>
            <td>{{ data.penerbit }}</td>
            <td>{{ data.tahun }}</td>
            <td>{{ data.tanggal_input }}</td>
            <td>Rp.{{ data.harga }}</td>
            <td>
              <img :src="data.file_cover" alt="file_cover" style="max-width: 150px" />
            </td>
            <td>
              <router-link :to="{ name: 'updateBuku', params: { kode: data.kode } }" class="btn btn-warning me-3">Update</router-link>
              <button type="button" class="btn btn-danger" v-on:click="deletebuku(data.kode)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>




  <div class="container my-5">
    <div class="mb-5">
      <h1 class="text-center">CRUD Operation Kategori</h1>
      <hr />
    </div>
    <!-- Button trigger modal -->
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Tambah Kategori
      </button>
    </div>

    <!-- Modal Insert -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Data</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input class="form-control" type="text" v-model="insertKode1" placeholder="kode" aria-label="default input example" /><br />
            <input class="form-control" type="text" v-model="insertKategori" placeholder="kategori" aria-label="default input example" /><br />
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="button" class="btn btn-primary" v-on:click="postkategori()">Tambah Kategori</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="table-responsive">
      <table class="table border">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Kode</th>
            <th scope="col">Kategori</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in kategori" :key="data.kode">
            <td>{{ index + 1 }}</td>
            <td>{{ data.kode }}</td>
            <td>{{ data.kategori }}</td>
            <td>
              <router-link :to="{ name: 'updateKategori', params: { kode: data.kode } }" class="btn btn-warning me-3">Update</router-link>
              <button type="button" class="btn btn-danger" v-on:click="deletekategori(data.kode)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const allBuku = 'http://localhost/library/selectallbuku.php';
const postApi = 'http://localhost/library/insertbuku.php';
const delAPI = 'http://localhost/library/deletebukubykode.php';

const allKategori = 'http://localhost/library/selectallkategori.php';
const postApi2 = 'http://localhost/library/insertkategori.php';
const delAPI2 = 'http://localhost/library/deletekategoribykode.php';

export default {
  data() {
    return {
      buku: ref([]),
      insertKode: '',
      insertKodeKategori: '',
      insertJudul: '',
      insertPengarang: '',
      insertPenerbit: '',
      insertTahun: '',
      insertTanggalInput: '',
      insertHarga: '',
      file: '',

      kategori: ref([]),
      insertKode1: '',
      insertKategori: '',
    };
  },

  mounted() {
    this.readData();
    this.readData2();
  },

  methods: {
    readData() {
      axios.get(allBuku)
        .then((resp) => {
          console.log(resp);
          this.buku = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    readData2() {
      axios.get(allKategori)
        .then((resp) => {
          console.log(resp);
          this.kategori = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    postbuku() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('kode', this.insertKode);
      formData.append('kode_kategori', this.insertKodeKategori);
      formData.append('judul', this.insertJudul);
      formData.append('pengarang', this.insertPengarang);
      formData.append('penerbit', this.insertPenerbit);
      formData.append('tahun', this.insertTahun);
      formData.append('tanggal_input', this.insertTanggalInput);
      formData.append('harga', this.insertHarga);
      formData.append('file_cover', this.file);

      axios.post(postApi, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          console.log(resp.data);
          this.readData();
          this.insertKode = '';
          this.insertJudul = '';
          this.insertKodeKategori = '';
          this.insertPengarang = '';
          this.insertPenerbit = '';
          this.insertTahun = '';
          this.insertTanggalInput = '';
          this.insertHarga = '';
          this.$refs.file.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },


    postkategori() {
      
      let formData = new FormData();
      formData.append('kode', this.insertKode1);
      formData.append('kategori', this.insertKategori);
      

      axios.post(postApi2, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          console.log(resp.data);
          this.readData2();
          this.insertKode1 = '';
          this.insertKategori = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deletebuku(kode) {
      if (confirm('Apakah anda ingin menghapus data?')) {
        axios.get(delAPI + '?kode=' + kode)
          .then((resp) => {
            console.log(resp);
            this.readData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },


    deletekategori(kode) {
      if (confirm('Apakah anda ingin menghapus data?')) {
        axios.get(delAPI2 + '?kode=' + kode)
          .then((resp) => {
            console.log(resp);
            this.readData2();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
