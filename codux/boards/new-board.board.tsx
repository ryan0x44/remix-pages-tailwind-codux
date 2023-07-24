import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
    <div className="bg-red-500">Test</div>
    </div>
});
