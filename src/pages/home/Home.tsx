import {Button} from '@shared/button';
import {FullWidthContainer} from '@shared/container';

function Home() {
  return (
    <FullWidthContainer px={6} className="py-24">
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
    </FullWidthContainer>
  );
}

export default Home;
