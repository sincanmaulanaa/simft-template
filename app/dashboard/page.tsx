import Header from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, MapPin, Calendar, Clock, User, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Aktivitas Mahasiswa" currentPage="Dashboard" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Aktivitas Mahasiswa</h1>

        <Tabs defaultValue="praktikum" className="mb-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="praktikum" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Praktikum <span className="ml-1 rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-600">2</span>
            </TabsTrigger>
            <TabsTrigger value="kampus-merdeka" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Kampus Merdeka <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">1</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="praktikum" className="mt-6">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-orange-500" />
                    Praktikum ABCDE
                  </CardTitle>
                  <div className="absolute right-6 top-6 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                    Terdaftar
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Ruang D410</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Periode</div>
                          <div className="font-medium">Semester 7 - 2024</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Jadwal</div>
                          <div className="font-medium">Hari Minggu, Jam 16.20 - 17.10</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <User className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Dosen</div>
                          <div className="font-medium">Ismail Abdurrozzaq Zulkarnain, S.Kom, M.Kom</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">Kode Praktikum: 653604</div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/praktikum">Lihat Detail Praktikum</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-orange-500" />
                    Praktikum Pemrogramman Bergerak
                  </CardTitle>
                  <div className="absolute right-6 top-6 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                    Terdaftar
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Ruang F507</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Periode</div>
                          <div className="font-medium">Semester 7 - 2024</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Jadwal</div>
                          <div className="font-medium">Hari Selasa, Jam 12.30 - 13.20</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <User className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Dosen</div>
                          <div className="font-medium">Ghulam Asrofi Buntoro, S.T., M.Eng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">Kode Praktikum: 653578</div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/praktikum">Lihat Detail Praktikum</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="kampus-merdeka" className="mt-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-500" />
                  Dicoding Bangun Negeri
                </CardTitle>
                <div className="absolute right-6 top-6 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                  Disetujui
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium">sdsdsd</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Periode</div>
                        <div className="font-medium">13 Mei 2025 - 28 Agustus 2025</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Jenis Program</div>
                        <div className="font-medium">Program Dicoding Bangun Negeri</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/kampus-merdeka">Lihat Detail Program</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">{/* Main content area */}</div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bell className="h-5 w-5" />
                  Pemberitahuan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-l-red-500 pl-4">
                  <div className="font-medium">Status Mata Kuliah Diperbarui</div>
                  <p className="text-sm text-gray-600">
                    Status mata kuliah untuk program Dicoding Bangun Negeri telah diperbarui. Disetujui: Pendidikan
                    Agama Islam, Bahasa Indonesia Ditolak: Agama Islam
                  </p>
                  <div className="mt-1 text-xs text-gray-500">sekitar 3 jam yang lalu</div>
                </div>

                <div className="border-l-4 border-l-green-500 pl-4">
                  <div className="font-medium">Status Mata Kuliah Diperbarui</div>
                  <p className="text-sm text-gray-600">
                    Status mata kuliah untuk program Dicoding Bangun Negeri telah diperbarui. Disetujui: Bahasa Inggris,
                    Pendidikan Agama Islam, Bahasa Indonesia, Bahasa Jepang, Bahasa Jerman
                  </p>
                  <div className="mt-1 text-xs text-gray-500">1 hari yang lalu</div>
                </div>

                <div className="border-l-4 border-l-red-500 pl-4">
                  <div className="font-medium">Status Mata Kuliah Diperbarui</div>
                  <p className="text-sm text-gray-600">
                    Status mata kuliah untuk program Dicoding Bangun Negeri telah diperbarui. Disetujui: Bahasa Inggris,
                    Pendidikan
                  </p>
                  <div className="mt-1 text-xs text-gray-500">3 hari yang lalu</div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="/pemberitahuan">Lihat Semua Pemberitahuan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
