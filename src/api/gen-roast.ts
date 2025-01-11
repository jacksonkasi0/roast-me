import { RoastResponse } from '@/type';
import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Generates a roast message based on the provided GitHub URL.
 *
 * @param {string} github_url - The GitHub URL to generate a roast for.
 * @returns {Promise<RoastResponse>} A promise that resolves to the generated roast.
 * @throws {Error} If the roast generation fails.
 */
export async function generateRoast(github_url: string): Promise<RoastResponse> {
    try {
        const response = await axios.post('/roast', { github_url }, {
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