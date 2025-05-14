import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, FileText, GraduationCap, ArrowRight } from "lucide-react"

export default function KampusMerdekaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Program Kampus Merdeka Saya" currentPage="Kampus Merdeka" />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">Program Kampus Merdeka Saya</h1>
            <p className="text-gray-500 mt-1">Pantau dan kelola partisipasi Anda dalam program Kampus Merdeka.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <span className="mr-2">+</span> Daftar Program Baru
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-t-4 border-t-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                educourse
              </CardTitle>
              <div className="absolute right-6 top-6 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                Belum Dimulai
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="font-medium">dwdwd</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Periode</div>
                      <div className="font-medium">13 Mei 2025 - 20 Agustus 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Durasi</div>
                      <div className="font-medium">3 bulan</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <GraduationCap className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Jenis Program</div>
                    <div className="font-medium">Program Dicoding Bangun Negeri</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Status Persetujuan</div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-600">
                        Menunggu
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Status Pembayaran</div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-600">
                        Menunggu
                      </span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Lihat Detail <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Codepolitan
              </CardTitle>
              <div className="absolute right-6 top-6 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                Belum Dimulai
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="font-medium">sdsdsd</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Periode</div>
                      <div className="font-medium">13 Mei 2025 - 28 Agustus 2025</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Durasi</div>
                      <div className="font-medium">3 bulan</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <GraduationCap className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Jenis Program</div>
                    <div className="font-medium">Program Dicoding Bangun Negeri</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Status Persetujuan</div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                        Disetujui
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Status Pembayaran</div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                        Lunas
                      </span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Lihat Detail <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                PT. Maleo Indonesia
              </CardTitle>
              <div className="absolute right-6 top-6 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                Belum Dimulai
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="font-medium">sdisikdb</div>
                </div>

                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Lihat Detail <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                PT. Maleo Indonesia
              </CardTitle>
              <div className="absolute right-6 top-6 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                Belum Dimulai
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="font-medium">Tangerang Selatan, Banten, Indonesia</div>
                </div>

                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Lihat Detail <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
