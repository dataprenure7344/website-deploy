export function IndustryTools() {
  const tools = [
    { name: "Python", img: "/tools/python.png" },
    { name: "Pandas", img: "/tools/pandas.png" },
    { name: "Scikit-learn", img: "/tools/sklearn.png" },
    { name: "Statsmodels", img: "/tools/statsmodels.png" },
    { name: "MySQL", img: "/tools/mysql.png" },
    { name: "AWS", img: "/tools/aws.png" },
    { name: "GCP", img: "/tools/gcp.png" },
    { name: "Azure", img: "/tools/azure.png" },
    { name: "PySpark", img: "/tools/pyspark.png" },
    { name: "PyTorch", img: "/tools/pytorch.png" },
    { name: "Keras", img: "/tools/keras.png" },
    { name: "OpenAI", img: "/tools/openai.png" },
    { name: "GPT", img: "/tools/gpt.png" },
    { name: "LlamaIndex", img: "/tools/llamaindex.png" },
    { name: "Claude", img: "/tools/claude.png" },
    { name: "CrewAI", img: "/tools/crewai.png" },
    { name: "LangGraph", img: "/tools/langgraph.png" },
    { name: "Autogen", img: "/tools/autogen.png" },
    { name: "Power BI", img: "/tools/powerbi.png" },
    { name: "Tableau", img: "/tools/tableau.png" },
    { name: "MongoDB", img: "/tools/mongodb.png" },
    { name: "Docker", img: "/tools/docker.png" },
    { name: "Kubernetes", img: "/tools/kubernetes.png" },
    { name: "Streamlit", img: "/tools/streamlit.png" },
    { name: "Airflow", img: "/tools/airflow.png" },
    { name: "MLflow", img: "/tools/mlflow.png" },
    { name: "Kafka", img: "/tools/kafka.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Master <span className="text-red-500">80+</span> Essential Industry Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="border rounded-xl p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition"
          >
            <img
              src={tool.img}
              alt={tool.name}
              className="h-10 w-auto object-contain"
            />
            <span className="text-sm font-medium text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
