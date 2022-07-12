export class CarBrand {
  id: string;
  name: string;
  logo: string;
  describe: string;
  number_of_models: number;
  status: boolean;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
  deleted_by: string;
  deleted_at: string;
  deleted: boolean;

  constructor(
    id: string,
    name: string,
    logo: string,
    describe: string,
    number_of_models: number,
    status: boolean,
    created_by: string,
    created_at: string,
    updated_by: string,
    updated_at: string,
    deleted_by: string,
    deleted_at: string,
    deleted: boolean
  ) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.describe = describe;
    this.number_of_models = number_of_models;
    this.status = status;
    this.created_by = created_by;
    this.created_at = created_at;
    this.updated_by = updated_by;
    this.updated_at = updated_at;
    this.deleted_by = deleted_by;
    this.deleted_at = deleted_at;
    this.deleted = deleted;
  }
}
