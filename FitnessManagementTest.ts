import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.lang.reflect.Member;
import java.util.List;

class FitnessManagementTest {

    private FitnessManagement fitnessManagement;

    @BeforeEach
    void setUp() {
        fitnessManagement = new FitnessManagement();
    }

    @Test
    void testAddMember() {
        Member member = new Member("John Doe", 25, 70.5, 1.75, "Male", "Lose weight");
        fitnessManagement.addMember(member);

        List<Member> members = fitnessManagement.getAllMembers();
        assertEquals(1, members.size());
        assertEquals("John Doe", members.get(0).getName());
    }

    @Test
    void testUpdateMember() {
        Member member = new Member("John Doe", 25, 70.5, 1.75, "Male", "Lose weight");
        fitnessManagement.addMember(member);

        Member updatedMember = new Member("John Doe", 26, 71.0, 1.75, "Male", "Gain muscle");
        fitnessManagement.updateMember(0, updatedMember);

        List<Member> members = fitnessManagement.getAllMembers();
        assertEquals(26, members.get(0).getName());
        assertEquals(71.0, members.get(0).getName());
    }

    @Test
    void testDeleteMember() {
        Member member1 = new Member("John Doe", 25, 70.5, 1.75, "Male", "Lose weight");
        Member member2 = new Member("Jane Doe", 30, 60.0, 1.65, "Female", "Maintain weight");
        fitnessManagement.addMember(member1);
        fitnessManagement.addMember(member2);

        fitnessManagement.deleteMember(0);

        List<Member> members = fitnessManagement.getAllMembers();
        assertEquals(1, members.size());
        assertEquals("Jane Doe", members.get(0).getName());
    }

    @Test
    void testCalculateBMI() {
        Member member = new Member("John Doe", 25, 70.5, 1.75, "Male", "Lose weight");
        fitnessManagement.addMember(member);

        double bmi = fitnessManagement.calculateMemberBMI(0);
        assertEquals(70.5 / (1.75 * 1.75), bmi, 0.01);
    }

    @Test
    void testCalculateBMIWithInvalidIndex() {
        Member member = new Member("John Doe", 25, 70.5, 1.75, "Male", "Lose weight");
        fitnessManagement.addMember(member);

        double bmi = fitnessManagement.calculateMemberBMI(1); // Invalid index
        assertEquals(-1, bmi);
    }
}
