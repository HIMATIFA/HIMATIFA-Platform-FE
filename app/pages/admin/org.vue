<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Plus, Edit2, Trash2, X, Check, AlertTriangle,
  Users, Layers, Upload, Tag, Image as ImageIcon,
  Globe, Lightbulb, HeartHandshake, Megaphone, Code
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

type MemberStatus = "Aktif" | "Tidak Aktif";

interface Member {
  id: number;
  name: string;
  role: string;
  division: string | null;
  level: 0 | 1 | 2;
  status: MemberStatus;
  photo: string;
}

interface Division {
  id: number;
  abbr: string;
  icon: string;
  name: string;
  description: string;
  programs: string[];
  status: "Aktif" | "Tidak Aktif";
}

const iconMap: Record<string, any> = {
  Globe,
  Lightbulb,
  HeartHandshake,
  Megaphone,
  Users
};

const initialMembers: Member[] = [
  { id: 1, name: "Vice Rajin Sholat", role: "Ketua Himpunan", division: null, level: 0, status: "Aktif", photo: "" },
  { id: 2, name: "Andy Bagus", role: "Wakil Himpunan", division: null, level: 1, status: "Aktif", photo: "" },
  { id: 3, name: "Aura Rizky", role: "Sekretaris Umum", division: null, level: 1, status: "Aktif", photo: "" },
  { id: 4, name: "Maulidia", role: "Bendahara Umum", division: null, level: 1, status: "Aktif", photo: "" },
  { id: 5, name: "Depa Raja Iblis", role: "Ketua Departemen PSDM", division: "PSDM", level: 2, status: "Aktif", photo: "" },
  { id: 6, name: "Muhammad Arya", role: "Ketua Departement Luar Negeri", division: "Deplu", level: 2, status: "Aktif", photo: "" },
  { id: 7, name: "Khoirul Anam", role: "Ketua Departement Ekraf", division: "Ekraf", level: 2, status: "Aktif", photo: "" },
  { id: 8, name: "Afzal Raza", role: "Ketua Departement Kepsos", division: "Kepsos", level: 2, status: "Aktif", photo: "" },
  { id: 9, name: "Naufal Umron", role: "Ketua Departement Medkominfo", division: "Medkominfo", level: 2, status: "Aktif", photo: "" },
];

const initialDivisions: Division[] = [
  {
    id: 1,
    abbr: "PSDM",
    icon: "Users",
    name: "Pengembangan Sumber Daya Mahasiswa",
    description: "Departemen yang bertanggung jawab atas pengembangan kualitas manusia di dalam organisasi HIMATIFA. PSDM menjadi motor penggerak dalam membangun karakter kepemimpinan, meningkatkan kapasitas anggota, serta memastikan setiap individu memiliki kompetensi yang memadai.",
    programs: ["Pelatihan & pengembangan kepemimpinan anggota", "Rekrutmen dan seleksi pengurus baru", "Evaluasi performa & kinerja pengurus", "Membangun kebersamaan & solidaritas internal"],
    status: "Aktif"
  },
  {
    id: 2,
    abbr: "Deplu",
    icon: "Globe",
    name: "Luar Negeri",
    description: "Departemen yang membawa HIMATIFA keluar dari lingkup internal kampus. DEPLU bertugas membangun dan memelihara relasi dengan organisasi lain, universitas se-Jawa Timur, komunitas teknologi, hingga pihak industri sebagai ujung tombak jejaring dan kolaborasi.",
    programs: ["Jaringan & kerja sama antar organisasi kampus", "Koneksi dengan universitas & komunitas eksternal", "Perwakilan HIMATIFA di acara & forum eksternal", "Membuka peluang sponsorship & partnership"],
    status: "Aktif"
  },
  {
    id: 3,
    abbr: "Ekraf",
    icon: "Lightbulb",
    name: "Ekonomi Kreatif",
    description: "Departemen yang mengelola aspek kreatif dan ekonomi organisasi. EKRAF bertugas merancang produk kreatif, mengelola merchandise, serta menjadi penggerak roda ekonomi internal HIMATIFA agar organisasi berdiri secara finansial mandiri dan produktif.",
    programs: ["Desain & produksi merchandise HIMATIFA", "Pengelolaan keuangan organisasi secara transparan", "Pengembangan ide-ide bisnis kreatif mahasiswa", "Pengelolaan booth dan kegiatan ekonomi kreatif"],
    status: "Aktif"
  },
  {
    id: 4,
    abbr: "Kepsos",
    icon: "HeartHandshake",
    name: "Kepedulian Sosial",
    description: "Departemen yang menjadi jembatan komunikasi antara HIMATIFA dengan berbagai pihak di lingkungan internal kampus. KEPSOS memastikan aspirasi mahasiswa tersampaikan, membangun hubungan harmonis dengan dosen dan civitas akademika, serta merancang kegiatan yang berdampak sosial.",
    programs: ["Menampung & menyalurkan aspirasi mahasiswa", "Komunikasi & relasi dengan dosen pembimbing", "Penyelenggaraan kegiatan sosial & pengabdian", "Membangun iklim internal yang positif & inklusif"],
    status: "Aktif"
  },
  {
    id: 5,
    abbr: "Medkominfo",
    icon: "Megaphone",
    name: "Media Komunikasi & Informasi",
    description: "Departemen yang menjadi suara dan wajah digital HIMATIFA. MEDKOMINFO bertanggung jawab atas seluruh publikasi, branding, pengelolaan media sosial, dokumentasi kegiatan, serta pemanfaatan teknologi informasi untuk memperkuat citra organisasi.",
    programs: ["Pengelolaan media sosial & konten digital", "Dokumentasi foto & video setiap kegiatan", "Desain grafis untuk publikasi & poster", "Strategi branding & identitas visual HIMATIFA"],
    status: "Aktif"
  },
];

const activeTab = ref<"members" | "divisions">("members");
const members = ref<Member[]>(initialMembers);
const divisions = ref<Division[]>(initialDivisions);

const deleteModal = ref<{
  open: boolean;
  type: "member" | "division";
  id: number | null;
  title: string;
}>({ open: false, type: "member", id: null, title: "" });

const memberModal = ref<{
  open: boolean;
  saved: boolean;
  form: Partial<Member>;
}>({
  open: false,
  saved: false,
  form: { name: "", role: "", division: "", level: 2, status: "Aktif", photo: "" }
});

const divisionModal = ref<{
  open: boolean;
  saved: boolean;
  programInput: string;
  form: Partial<Division>;
}>({
  open: false,
  saved: false,
  programInput: "",
  form: { abbr: "", icon: "Code", name: "", description: "", programs: [], status: "Aktif" }
});

const levelLabels = ["Pimpinan Umum", "Pengurus Inti", "Ketua Bidang"];

const groupedMembers = computed(() => {
  return [0, 1, 2].map((level) => ({
    level,
    label: levelLabels[level],
    items: members.value.filter((m) => m.level === level),
  })).filter((g) => g.items.length > 0);
});

const getInitials = (name: string) => {
  if (!name) return "??";
  return name
      .replace(/[[\]]/g, "")
      .trim()
      .split(" ")
      .map((w) => w[0] ?? "")
      .filter(Boolean)
      .join("")
      .slice(0, 2)
      .toUpperCase() || "??";
};

const openDeleteModal = (type: "member" | "division", id: number, title: string) => {
  deleteModal.value = { open: true, type, id, title };
};

const confirmDelete = () => {
  const { type, id } = deleteModal.value;
  if (id === null) return;

  if (type === "member") {
    members.value = members.value.filter((m) => m.id !== id);
  } else {
    divisions.value = divisions.value.filter((d) => d.id !== id);
  }
  deleteModal.value.open = false;
};

const openMemberModal = (member?: Member) => {
  memberModal.value.saved = false;
  if (member) {
    memberModal.value.form = { ...member };
  } else {
    memberModal.value.form = { name: "", role: "", division: null, level: 2, status: "Aktif", photo: "" };
  }
  memberModal.value.open = true;
};

const handlePhotoUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    memberModal.value.form.photo = URL.createObjectURL(file);
  }
};

const saveMember = () => {
  memberModal.value.saved = true;
  setTimeout(() => {
    const form = memberModal.value.form;
    if (form.id) {
      members.value = members.value.map((m) => (m.id === form.id ? ({ ...m, ...form } as Member) : m));
    } else {
      members.value.push({
        ...form,
        id: Date.now(),
        level: form.level ?? 2,
        status: form.status ?? "Aktif",
      } as Member);
    }
    memberModal.value.open = false;
  }, 500);
};

const openDivisionModal = (division?: Division) => {
  divisionModal.value.saved = false;
  divisionModal.value.programInput = "";
  if (division) {
    divisionModal.value.form = { ...division, programs: [...division.programs] };
  } else {
    divisionModal.value.form = { abbr: "", icon: "Code", name: "", description: "", programs: [], status: "Aktif" };
  }
  divisionModal.value.open = true;
};

const addProgram = () => {
  const val = divisionModal.value.programInput.trim();
  if (val && divisionModal.value.form.programs) {
    divisionModal.value.form.programs.push(val);
    divisionModal.value.programInput = "";
  }
};

const removeProgram = (index: number) => {
  if (divisionModal.value.form.programs) {
    divisionModal.value.form.programs.splice(index, 1);
  }
};

const saveDivision = () => {
  divisionModal.value.saved = true;
  setTimeout(() => {
    const form = divisionModal.value.form;
    if (form.id) {
      divisions.value = divisions.value.map((d) => (d.id === form.id ? ({ ...d, ...form } as Division) : d));
    } else {
      divisions.value.push({
        ...form,
        id: Date.now(),
        programs: form.programs || [],
        status: form.status ?? "Aktif",
      } as Division);
    }
    divisionModal.value.open = false;
  }, 500);
};
</script>

<template>
  <div class="space-y-6 animate-in fade-in duration-300">
    <div>
      <h1 class="text-2xl font-black text-foreground font-display">Organisasi & Departemen</h1>
      <p class="text-muted-foreground text-sm mt-0.5">Kelola struktur kepengurusan dan bidang HIMATIFA</p>
    </div>

    <div class="flex gap-2 bg-card rounded-2xl border border-border p-1.5 w-fit shadow-sm">
      <button
          @click="activeTab = 'members'"
          :class="[
          'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all font-display',
          activeTab === 'members'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-input-background'
        ]"
      >
        <Users class="w-4 h-4"/> Kepengurusan
      </button>
      <button
          @click="activeTab = 'divisions'"
          :class="[
          'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all font-display',
          activeTab === 'divisions'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-input-background'
        ]"
      >
        <Layers class="w-4 h-4"/> Departemen
      </button>
    </div>

    <div v-if="activeTab === 'members'" class="space-y-6">
      <div class="flex items-center justify-between">
        <p class="text-muted-foreground text-sm font-medium">Periode 2026/2027 · {{ members.length }} Pengurus</p>
        <button
            @click="openMemberModal()"
            class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm"
        >
          <Plus class="w-4 h-4"/> Tambah Pengurus
        </button>
      </div>

      <div v-for="group in groupedMembers" :key="group.level" class="space-y-3">
        <div class="flex items-center gap-2">
          <span class="text-primary text-xs font-bold tracking-widest uppercase font-display">{{ group.label }}</span>
          <span class="text-muted-foreground/60 text-xs font-mono">({{ group.items.length }})</span>
        </div>

        <div class="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <div class="divide-y divide-border">
            <div
                v-for="m in group.items"
                :key="m.id"
                class="flex items-center gap-4 px-5 py-4 hover:bg-input-background/50 transition-colors group"
            >
              <div class="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold shrink-0 overflow-hidden font-display">
                <img v-if="m.photo" :src="m.photo" :alt="m.name" class="w-full h-full object-cover" />
                <span v-else>{{ getInitials(m.name) }}</span>
              </div>

              <div class="flex-1 min-w-0">
                <div class="text-foreground font-bold text-sm font-display group-hover:text-primary transition-colors">{{ m.name }}</div>
                <div class="text-muted-foreground text-xs mt-0.5">{{ m.role }}</div>
              </div>

              <span v-if="m.division" class="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                {{ m.division }}
              </span>

              <span
                  :class="[
                  'hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider',
                  m.status === 'Aktif'
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                    : 'bg-muted text-muted-foreground border border-border'
                ]"
              >
                {{ m.status }}
              </span>

              <div class="flex items-center gap-1">
                <button
                    @click="openMemberModal(m)"
                    class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    title="Edit Pengurus"
                >
                  <Edit2 class="w-3.5 h-3.5"/>
                </button>
                <button
                    @click="openDeleteModal('member', m.id, m.name)"
                    class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                    title="Hapus Pengurus"
                >
                  <Trash2 class="w-3.5 h-3.5"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="space-y-5">
      <div class="flex items-center justify-between">
        <p class="text-muted-foreground text-sm font-medium">{{ divisions.length }} Departemen Aktif</p>
        <button
            @click="openDivisionModal()"
            class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm"
        >
          <Plus class="w-4 h-4"/> Tambah Bidang
        </button>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div
            v-for="d in divisions"
            :key="d.id"
            class="bg-card rounded-2xl border border-border p-5 hover:border-primary/40 transition-all shadow-sm flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <component :is="iconMap[d.icon]" class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-foreground font-bold text-sm font-display">{{ d.abbr }}</div>
                  <span
                      :class="[
                      'inline-flex px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider',
                      d.status === 'Aktif'
                        ? 'bg-emerald-500/10 text-emerald-500'
                        : 'bg-muted text-muted-foreground'
                    ]"
                  >
                    {{ d.status }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <button
                    @click="openDivisionModal(d)"
                    class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Edit2 class="w-3.5 h-3.5"/>
                </button>
                <button
                    @click="openDeleteModal('division', d.id, d.name)"
                    class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                >
                  <Trash2 class="w-3.5 h-3.5"/>
                </button>
              </div>
            </div>

            <h3 class="text-foreground font-bold text-base mb-2 leading-snug font-display">
              {{ d.name }}
            </h3>
            <p class="text-muted-foreground text-xs leading-relaxed mb-4">{{ d.description }}</p>
          </div>

          <div>
            <div class="text-muted-foreground/70 text-[10px] font-bold uppercase tracking-wider mb-2 font-display">Program Kerja Utama</div>
            <div class="flex flex-wrap gap-1.5">
              <span
                  v-for="p in d.programs"
                  :key="p"
                  class="px-2.5 py-1 rounded-lg bg-input-background text-foreground border border-border text-[11px] font-medium"
              >
                {{ p }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="deleteModal.open" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-card rounded-2xl shadow-xl border border-border w-full max-w-md p-7 animate-in zoom-in-95 duration-200">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
            <AlertTriangle class="w-5 h-5"/>
          </div>
          <div>
            <h3 class="text-foreground font-bold text-base font-display">Hapus Data</h3>
            <p class="text-muted-foreground text-sm mt-1">
              Apakah Anda yakin ingin menghapus <span class="font-bold text-foreground">"{{ deleteModal.title }}"</span>? Tindakan ini tidak dapat dibatalkan.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-end gap-3">
          <button @click="deleteModal.open = false" class="px-4 py-2 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">
            Batal
          </button>
          <button @click="confirmDelete" class="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground text-sm font-bold hover:bg-destructive/90 transition-colors">
            Hapus
          </button>
        </div>
      </div>
    </div>

    <div v-if="memberModal.open" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-card rounded-2xl shadow-xl border border-border w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div class="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 class="text-foreground font-bold text-base font-display">
            {{ memberModal.form.id ? 'Edit Pengurus' : 'Tambah Pengurus Baru' }}
          </h3>
          <button @click="memberModal.open = false" class="text-muted-foreground hover:text-foreground transition-colors">
            <X class="w-5 h-5"/>
          </button>
        </div>
        <div class="p-6 space-y-4">
          <div class="flex justify-center">
            <label class="relative w-20 h-20 rounded-full bg-input-background border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground text-xs gap-1 cursor-pointer hover:border-primary/50 transition-colors overflow-hidden group">
              <img v-if="memberModal.form.photo" :src="memberModal.form.photo" class="w-full h-full object-cover" />
              <template v-else>
                <Upload class="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors"/>
                <span class="text-[10px] font-medium">Foto</span>
              </template>
              <input type="file" accept="image/*" class="hidden" @change="handlePhotoUpload" />
            </label>
          </div>

          <div>
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Nama Lengkap</label>
            <input
                v-model="memberModal.form.name"
                type="text"
                placeholder="Contoh: Ahmad Rizky"
                class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Jabatan</label>
            <input
                v-model="memberModal.form.role"
                type="text"
                placeholder="Contoh: Ketua Umum / Anggota Bidang"
                class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Bidang</label>
              <select
                  v-model="memberModal.form.division"
                  class="w-full border border-border bg-card rounded-xl px-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              >
                <option :value="null">— Tidak ada —</option>
                <option v-for="d in divisions" :key="d.id" :value="d.abbr">{{ d.abbr }}</option>
              </select>
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Status</label>
              <select
                  v-model="memberModal.form.status"
                  class="w-full border border-border bg-card rounded-xl px-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              >
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 flex items-center justify-end gap-3">
          <button @click="memberModal.open = false" class="px-4 py-2.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">
            Batal
          </button>
          <div v-if="memberModal.saved" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-sm font-bold">
            <Check class="w-4 h-4"/> Tersimpan!
          </div>
          <button v-else @click="saveMember" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
            Simpan
          </button>
        </div>
      </div>
    </div>

    <div v-if="divisionModal.open" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-card rounded-2xl shadow-xl border border-border w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        <div class="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 class="text-foreground font-bold text-base font-display">
            {{ divisionModal.form.id ? 'Edit Departemen' : 'Tambah Bidang Baru' }}
          </h3>
          <button @click="divisionModal.open = false" class="text-muted-foreground hover:text-foreground transition-colors">
            <X class="w-5 h-5"/>
          </button>
        </div>
        <div class="p-6 space-y-4">
          <div class="grid grid-cols-3 gap-3">
            <div class="col-span-1">
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Icon</label>
              <select
                  v-model="divisionModal.form.icon"
                  class="w-full border border-border bg-card rounded-xl px-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              >
                <option value="Code">Code</option>
                <option value="Globe">Globe</option>
                <option value="Lightbulb">Lightbulb</option>
                <option value="HeartHandshake">HeartHandshake</option>
                <option value="Megaphone">Megaphone</option>
              </select>
            </div>
            <div class="col-span-1">
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Singkatan</label>
              <input
                  v-model="divisionModal.form.abbr"
                  type="text"
                  placeholder="BD 1"
                  class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all font-mono"
              />
            </div>
            <div class="col-span-1">
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Status</label>
              <select
                  v-model="divisionModal.form.status"
                  class="w-full border border-border bg-card rounded-xl px-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              >
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Nama Departemen</label>
            <input
                v-model="divisionModal.form.name"
                type="text"
                placeholder="Contoh: Bidang Pengembangan Organisasi"
                class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Deskripsi Singkat</label>
            <textarea
                v-model="divisionModal.form.description"
                rows="3"
                placeholder="Jelaskan fokus utama departement ini..."
                class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all resize-none"
            ></textarea>
          </div>

          <div>
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Program Kerja Utama</label>
            <div class="flex gap-2 mb-2">
              <input
                  v-model="divisionModal.programInput"
                  type="text"
                  placeholder="Tambah nama proker..."
                  @keydown.enter.prevent="addProgram"
                  class="flex-1 border border-border bg-transparent rounded-xl px-4 py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              />
              <button @click="addProgram" type="button" class="px-3 py-2 bg-input-background border border-border hover:border-primary/40 text-foreground rounded-xl text-sm font-bold">
                Tambah
              </button>
            </div>

            <div class="flex flex-wrap gap-1.5 min-h-[32px] p-2 rounded-xl bg-input-background/40 border border-border">
              <span
                  v-for="(prog, idx) in divisionModal.form.programs"
                  :key="idx"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card border border-border text-foreground text-xs font-medium"
              >
                <Tag class="w-3 h-3 text-primary"/>
                {{ prog }}
                <button @click="removeProgram(idx)" class="text-muted-foreground hover:text-destructive">
                  <X class="w-3 h-3"/>
                </button>
              </span>
              <span v-if="!divisionModal.form.programs?.length" class="text-muted-foreground/50 text-xs italic p-0.5">
                Belum ada program kerja ditambahkan
              </span>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 flex items-center justify-end gap-3">
          <button @click="divisionModal.open = false" class="px-4 py-2.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">
            Batal
          </button>
          <div v-if="divisionModal.saved" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-sm font-bold">
            <Check class="w-4 h-4"/> Tersimpan!
          </div>
          <button v-else @click="saveDivision" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>