import { IoHeartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
}

export const PokemonCard = ({ id, name }: Props) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            // priority={false} ya no necesario en versiones recientes de Next
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More information
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-green-600">
              <IoHeartOutline className="text-red-600" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Not favorite
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
