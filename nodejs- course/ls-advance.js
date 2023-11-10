import fs from 'fs/promises'
import path from 'path'

const folder = process.argv[2] ?? '.'

const ls = async (folder) => {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`Hubo un error en ${folder}`)
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch {
      console.log(`Hubo un error en ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return (`${fileType} ${file.padEnd(20)} ${fileSize.toString()} ${fileModified}`)
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(file => console.log(file))
}

ls(folder)
