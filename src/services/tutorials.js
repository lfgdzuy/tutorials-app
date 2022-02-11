import http from "../http-client";
class TutorialsService {
  getAll() {
    return http.get("/tutorials");
  }
  get(id) {
    return http.get(`/tutorials/${id}`);
  }
  create(data) {
    return http.post("/tutorials", data);
  }
  update(data) {
    return http.put(`/tutorials/${data.id}`, data);
  }
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials/mass_delete`);
  }
  find(term) {
    return term !== "" ? http.get(`/tutorials?term=${term}`) : this.getAll();
  }
}
export default new TutorialsService();
