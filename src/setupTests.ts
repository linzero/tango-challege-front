import Enzyme from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() })
const ser:any = createSerializer({mode: 'deep'})
expect.addSnapshotSerializer( ser );
