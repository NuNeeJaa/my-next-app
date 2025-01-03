import { renderHook } from '@testing-library/react';
import { act } from 'react';
import axios from 'axios';
import useForm from '../useForm';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useForm', () => {
  // Mock console methods
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;
  const mockConsoleLog = jest.fn();
  const mockConsoleError = jest.fn();

  beforeAll(() => {
    console.log = mockConsoleLog;
    console.error = mockConsoleError;
  });

  afterAll(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with empty code and name', () => {
    const { result } = renderHook(() => useForm());

    expect(result.current.code).toBe('');
    expect(result.current.name).toBe('');
  });

  it('should update code value', () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setCode('1234');
    });

    expect(result.current.code).toBe('1234');
  });

  it('should update name value', () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setName('John Doe');
    });

    expect(result.current.name).toBe('John Doe');
  });

  it('should handle successful form submission', async () => {
    const { result } = renderHook(() => useForm());
    const mockResponse = { data: 'Data saved successfully' };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const mockEvent = {
      preventDefault: jest.fn(),
    } as unknown as React.FormEvent;

    await act(async () => {
      result.current.handleSubmit(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith('/api/save', {
      code: result.current.code,
      name: result.current.name,
    });
    expect(mockConsoleLog).toHaveBeenCalledWith('Data saved successfully:', mockResponse.data);
  });

  it('should handle form submission error', async () => {
    const { result } = renderHook(() => useForm());
    const mockError = new Error('Error saving data');

    mockedAxios.post.mockRejectedValueOnce(mockError);

    const mockEvent = {
      preventDefault: jest.fn(),
    } as unknown as React.FormEvent;

    await act(async () => {
      result.current.handleSubmit(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith('/api/save', {
      code: result.current.code,
      name: result.current.name,
    });
    expect(mockConsoleError).toHaveBeenCalledWith('Error saving data:', mockError);
  });
});