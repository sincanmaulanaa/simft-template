import { FileText } from "lucide-react"

interface HeaderProps {
  title: string
  currentPage: string
}

export default function Header({ title, currentPage }: HeaderProps) {
  return (
    <div className="flex items-center justify-between border-b px-4 py-4">
      <div className="flex items-center gap-2">
        <FileText className="h-5 w-5" />
        <span className="text-blue-600">{currentPage}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">ANDIKA NUR PRATAMA</span>
      </div>
    </div>
  )
}
