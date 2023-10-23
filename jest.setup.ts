import {server} from 'src/mock/api/server';
jest.useFakeTimers();

beforeAll(() => server.listen());

beforeEach(() => server.resetHandlers());

afterAll(() => server.close());
