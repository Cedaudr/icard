import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-82.5">
        <img
          src="https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=900&q=85"
          alt="Ferris wheel"
          className="h-48 w-full rounded-t-xl object-cover"
        />
        <CardHeader>
          <CardTitle>Headline</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-5 text-sm text-gray-500">
            welcom to world of enjoyment and fun. with your friends and family, you can enjoy the best moments of your life.
          </p>
          <button className="rounded bg-blue-600 px-4 py-2 text-sm font-bold text-white">
            See more
          </button>
        </CardContent>
      </Card>
    </main>
  );
}