import { createBoard } from '@wixc3/react-board';

import Example from "../../app/components/Example";

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <Example />
    </div>
});
