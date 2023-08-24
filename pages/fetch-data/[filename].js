import axios from 'axios';
import DataDisplay from '../../components/DataDisplay';

export async function getServerSideProps(context) {
  const { filename } = context.query;

  try {
    const response = await axios.get(`/api/fetch-data/${filename}`);
    const data = response.data;
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

function DynamicDataFetching({ data }) {
  return <DataDisplay data={data} />;
}

export default DynamicDataFetching;


