import { RoastResponse } from '@/type';
import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Generates a roast message based on the provided GitHub URL.
 *
 * @param {string} githubLink - The GitHub URL to generate a roast for.
 * @returns {Promise<RoastResponse>} A promise that resolves to the generated roast.
 * @throws {Error} If the roast generation fails.
 */
export async function generateRoast(githubLink: string): Promise<RoastResponse> {
    try {
        const response = await axios.post('/api/roast', { githubLink }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data.roast;
    } catch (error) {
        toast.warn('Failed to generate roast');
        throw new Error('Failed to generate roast');
    }
}