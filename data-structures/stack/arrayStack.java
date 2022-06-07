/**
 * Java implementation of an array stack since JS already
 * has all the goodies built in.
 */
public class FixedCapacityArrayStackOfStrings {
  private String[] storage;
  private int size = 0;

  public FixedCapacityArrayStackOfStrings(int N) {
    storage = new String[N];
  }

  isEmpty() {
    return size == 0;
  }

  push(String value) {
    storage[size++] = value;
  }

  pop() {
    return storage[--size];
  }
}
