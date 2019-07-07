import reducer from "../reducer";
import * as types from "../action-types";

describe("HotTip", () => {
  describe("Reducer", () => {
    let payload = null;

    describe("UPDATE_TOOLTIP", () => {
      beforeEach(() => {
        payload = {
          tip: "tooltip",
          visible: true,
          position: {
            anything: true
          }
        };
      });

      it("handles no state (but not no action)", () => {
        const state = reducer(undefined, { type: "unknown" });

        expect(state).toEqual({});
      });

      it("spreads payload correctly", () => {
        const state = reducer({}, { type: types.UPDATE_TOOLTIP, payload });

        expect(state.tip).toEqual(payload.tip);
        expect(state.visible).toEqual(payload.visible);
        expect(state.anything).toEqual(payload.position.anything);
      });

      it("unknown types return state", () => {
        const initialState = { anything: true };
        const state = reducer(initialState, { type: "unknown type", payload });

        expect(state.tip).not.toEqual(payload.tip);
        expect(state.visible).not.toEqual(payload.visible);
        expect(state).toEqual(initialState);
      });
    });
  });
});
