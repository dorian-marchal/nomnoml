class StoreUrl implements GraphStore {
  kind: StoreKind = 'url'
  constructor(private source: string) {}
  async files(): Promise<FileEntry[]> {
    return JSON.parse(localStorage['nomnoml.file_index'] || '[]') as FileEntry[]
  }
  async read(): Promise<string> { return this.source }
  async insert(source: string): Promise<void> { }
  async save(source: string): Promise<void> { return null }
  async clear(): Promise<void> { return null }
}
