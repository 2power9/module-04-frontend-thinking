// mô tả state + mô tả thao tác với state -> (useReducer) -> store
// giá trị/object -> (useContext) -> ContextProvider (để cung cấp giá trị cho toàn bộ component con)
// 									Context (để có thể lấy giá trị ở thằng con; thông qua useContext hoặc Context.Consumer)

// useReducer sẽ trả về store để tương tác, nhưng nếu component nào
// cũng phải import cái store vô (hay truyền state giữa các component nhau qua prop -- aka. prop drill)
// thì nó kì.
import reducer, { initialState } from './reducer';

// giải pháp: đưa cái store thành một giá trị global
// (truy cập được từ bất kì đâu kể từ cái Provider đổ xuống)
import React, { createContext, useContext, useReducer } from 'react';

// 1. tạo context
// achtuallky...
// createContext thực ra có thể nhận một giá trị ban đầu để thay thế cho việc chỉ định value ở Provider luôn.
// NHƯNG, ràng buộc của React là hook không được phép gọi ở bất kì nơi đâu ngoài component hoặc hook khác.
// nên, tạm thời mình sẽ có một cái context trống. việc populate giá trị sẽ thực hiện sau (ở ngay bước 2 kìa)
export const DataLayerContext = createContext();

// 2. lấy cái ContextProvider (đã có từ bước 1),
// tạo một cái HoC (higher-order component) để bọc cái ContextProvider đó lại.
// Provider trong HoC này sẽ lấy luôn cái store mà useReducer() trả về để chuyển thành giá trị global luôn.
export const DataLayer = ({ children }) => (
	<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</DataLayerContext.Provider>
)

// 3. lấy cái context (đã có từ bước 1),
// tạo một cái custom hook (đặt tên cho fancy thôi) để
// cung cấp cho các component con của thằng HoC (đã có từ bước 2) một cách để lấy
// giá trị global mà nó đang giữ ra xài.
export const useDataLayerValue = () => useContext(DataLayerContext);

// tiếp tục ngoài file này...

// 4. (index.js) dùng cái HoC (đã có từ bước 2), bọc nguyên cái App lại
// để... well, có giá trị global cho app xài chứ :v

// 5. (App.js) dùng cái custom hook (đã có từ bước 3),
// chạy nó ở trong App() để lấy data có được từ cái Provider kia ra.


/****************************************/

/*

Để tóm tắt lại một lần nữa:
Bài toán = Mình đã có UI. Giờ minh cần _reactive_ data để đi kèm với cái UI đó.
Giải pháp = Dựng một cái store cho cả app

"Dựng một cái store" -> dùng useReducer
"cho cả app" -> dùng useContext để bọc kết quả của useReducer lại.

1. (reducer.js) định nghĩa state và thao tác với state
2. (this file) tạo một HoC (Provider + store của mình) để _có cách thức_ truyền store cho cả app
   + tạo một hook để lấy cái store kia ra
3. (index.js; App.js) use 'em.

*/
