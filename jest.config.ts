import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
    dir: './',
})

const config: Config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    collectCoverage: true,  
    coverageDirectory: 'coverage', 
    coverageProvider: 'v8', // ใช้ v8 แทน babel
    collectCoverageFrom: [   
        '<rootDir>/src/app/program-code/hooks/**/*.{ts,tsx}',
        '!<rootDir>/src/app/program-code/hooks/**/__tests__/**',
        '!<rootDir>/src/app/program-code/hooks/**/**/__tests__/**',
        '!<rootDir>/src/app/program-code/hooks/**/mocks/**',
        '!<rootDir>/src/app/program-code/hooks/**/types/**',
    ],
};

export default createJestConfig(config);
