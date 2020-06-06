class Resource {
    constructor(id, topic, sourceType, source, title, description, image, link) {
        this.id = id;
        this.topic = topic;
        this.sourceType = sourceType;
        this.source = source;
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }
};

module.exports = {
    Resource
}