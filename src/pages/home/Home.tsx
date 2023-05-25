import { Button } from "@shared/button";

function Home() {
  return (
    <div>
      <h1 className=" text-hero">Hello Martir</h1>
      <h2 className=" text-subtitle">this is main page</h2>
      <Button type="primary" state="disabled">
        Здарова, Бандиты!
      </Button>
      <Button type="success" state="disabled">
        Здарова, Бандиты!
      </Button>
      <Button type="danger" state="disabled">
        Здарова, Бандиты!
      </Button>
      <Button type="warning" state="disabled">
        Здарова, Бандиты!
      </Button>

      <Button type="primary" state="normal">
        Здарова, Бандиты!
      </Button>
      <Button type="success" state="normal">
        Здарова, Бандиты!
      </Button>
      <Button type="danger" state="normal">
        Здарова, Бандиты!
      </Button>
      <Button type="warning" state="normal">
        Здарова, Бандиты!
      </Button>
      <Button>Здарова, Бандиты!</Button>
    </div>
  );
}

export default Home;
