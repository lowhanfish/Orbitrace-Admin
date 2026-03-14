import TitleBar from '@/components/TitleBar'
import TextSeparate from '@/components/items/TextSeparate';
import ListUser from './components/ListUser';
import ListDocuments from './components/ListDocuments';
import InputData from './components/InputData';
import InputDataACT from './components/InputDataACT';
import BTable from './components/BTable';




const page = () => {
    return (
        <div>
            <TitleBar title='Example Template' subtitle='Template Management' />

            <TextSeparate title='Input / Field' />
            <InputData />

            <TextSeparate title='Auto COmplete' />
            <InputDataACT />

            <TextSeparate title='List Documents' />
            <ListDocuments />

            <TextSeparate title='List User' />
            <ListUser />

            <TextSeparate title='Table List' />
            <BTable />



        </div>
    )
}

export default page
