import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../../src/use-counter/use-counter";

test("should increment counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.increment();
    });

    expect(result.current.count).toBe(1);
});
