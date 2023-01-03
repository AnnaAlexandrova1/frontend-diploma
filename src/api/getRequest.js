import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then(res => res.json())

// function useCity(path) {
//     const apiBase = "https://netology-trainbooking.netoservices.ru/";
//     const getCities = "routes/cities"

//     const { data, error, isLoading } = useSWR(`${apiBase}${getCities}?name=${path}`, fetcher)

//   return {
//     user: data,
//     isLoading,
//     isError: error
//   }
// }


class GetCity {
  _apiBase = "https://netology-trainbooking.netoservices.ru/";
  _getCities = "routes/cities"

  getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: &{res.status}`);
        }

        return await res.json()
  }
  
  getVariants = async (path) => {
    if (path.length < 1) {
       return
     }
      const res = await this.getResource(`${this._apiBase}${this._getCities}?name=${path}`);
      return res
  }
  
}

export { GetCity }

