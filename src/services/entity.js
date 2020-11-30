export default class EntityServices {
  constructor({ entity }) {
    this.model = entity;
  }

  async create(arg) {
    const entity = await this.model.create(arg);
    return { entity, status: 201 };
  }

  async findByOwner(arg) {

  }

  async findOneByOwner(arg) {

  }

  async updateOne(arg) {

  }
}
