import React from 'react'
import { useTraces } from '../../hooks/data/useTraces'

export const FileLoader: React.FC = () => {
  const { mutate } = useTraces()
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) mutate(file)
  }

  const handleSample = async () => {
    const res = await fetch('/SMA(NARROW11(CP-max).s3p')
    if (!res.ok) throw new Error('サンプルファイルの取得に失敗しました')
    const blob = await res.blob()
    const file = new File([blob], 'SMA(NARROW11(CP-max).s3p')
    mutate(file)
  }

  return (
    <div className="mb-2 w-full flex flex-col items-center">
      <input
        type="file"
        accept=".snp,.s2p,.s3p,.s4p"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button onClick={handleSample}>
        サンプル（SMA(NARROW11(CP-max).s3p）を読み込む
      </button>
    </div>
  )
}
