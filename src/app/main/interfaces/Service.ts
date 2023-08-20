export default interface Service {
    getAll(url)
    get(id)
    create(url,data)
    update(old, data)
    remove(id)
}