import BlogImage1 from '../../blogsImage/blog-image2.png';
import image1 from '../../blogsImage/blog1/image1.png';

const Blog_Data = {
    title: "Kafka - Producing and Consuming from same partition",
    info: "End-to-End message synchronisation - Use case where a consumer needs to send the event to a specific partition and the consumer must read from the same partition.",
    blog_image: BlogImage1,
    blog_content: [
        {
            paraTitle: "Introduction",
            paraContent: ["Apache Kafka provides a distributed and fault-tolerant messaging system capable of handling high volumes of data and real-time streams. It uses a publish-subscribe model, where producers publish messages to topics, and consumers subscribe to them to receive messages. Kafka’s durable storage and replication mechanisms ensure data reliability and fault tolerance.", "Create and save the project files, then use your preferred Integrated Development Environment (IDE) to open them."],
            paraImage:""
        },
        {
            paraTitle: "The problem",
            paraContent: ["Let's say we encouter a scenario where End-to-End message synchronisation - Use case where a consumer needs to send the event to a specific partition and the consumer must read from the same partition.","Meta AI and Microsoft have joined forces to introduce Llama 2, the next generation of Meta’s open-source large language model.","LLaMA: Large Language Model Meta AI Large Language Model Meta AI (LLaMA 1) is the first version of the stateoftheart foundational large language model that was released by Meta in February this year. It is an impressive collection of foundational models, comprised of models with parameter sixes ranging from 7 billion to 65 billion."],
            paraImage: image1
        },
        {
            paraTitle: "Conclusion",
            paraContent: ["Let's say we encouter a scenario where End-to-End message synchronisation - Use case where a consumer needs to send the event to a specific partition and the consumer must read from the same partition.","Meta AI and Microsoft have joined forces to introduce Llama 2, the next generation of Meta’s open-source large language model."],
            paraImage: ""
        }
    ]


}

export default Blog_Data;