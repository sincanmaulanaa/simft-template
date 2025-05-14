import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function SkripsiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Skripsi" currentPage="Skripsi" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Skripsi</h1>

        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-6 text-center">
            <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">Belum Ada Data Skripsi</h2>
            <p className="text-gray-500 max-w-md">
              Anda belum memiliki data skripsi. Silakan daftar skripsi terlebih dahulu.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Daftar Skripsi</Button>
        </div>
      </div>
    </div>
  )
}
