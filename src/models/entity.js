export default (Schema) => {
  const schema = new Schema({
    title: {
      type: String,
      required: true,
      length: 512,
    },
    body: {
      type: String,
      required: true,
      unique: true,
      length: 512,
    },
  }, { timestamps: true });

  return schema;
};
