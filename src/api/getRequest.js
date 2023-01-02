import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useCity(path) {
    const apiBase = "https://netology-trainbooking.netoservices.ru/";
    const getCities = "routes/cities"

    const { data, error, isLoading } = useSWR(`${apiBase}${getCities}?name=${path}`, fetcher)

  return {
    user: data,
    isLoading,
    isError: error
  }
}

export { useCity }