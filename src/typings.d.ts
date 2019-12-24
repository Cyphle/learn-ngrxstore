interface Identity {
  firstname: string;
  lastname: string;
  city: string;
  country: string;
  job: string;
  logo: string;
  background: string;
}

interface Argument {
  picture: string;
  title: string;
  content: string;
}

interface HomePageMapEntry {
  path: string;
  picture: string;
  content: string;
}

interface ErrorResponse {
  error: string;
}
