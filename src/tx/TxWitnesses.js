import { decodeList, encodeList } from "@helios-lang/cbor";
import { ByteStream } from "@helios-lang/codec-utils";
import { TxWitness } from "./TxWitness.js";

/**
 * @typedef {import("@helios-lang/codec-utils").ByteArrayLike} ByteArrayLike
 */

export class TxWitnesses {
  /**
   * @param {TxWitness[]} witnesses
   */
  constructor(witnesses) {
    this.witnesses = witnesses;
  }

  /**
   * @param {ByteArrayLike} bytes
   * @returns {TxWitnesses}
   */
  static fromCbor(bytes) {
    const stream = ByteStream.from(bytes);

    return new TxWitnesses(decodeList(stream, TxWitness));
  }

  toCbor() {
    return encodeList(this.witnesses);
  }
}
