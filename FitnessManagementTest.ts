package com.mycompany.fitnessmanagementsystemgui;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import java.util.List;

public class FitnessManagementTest {

    private FitnessManagement fitnessManagement;
    private Member testMember1;
    private Member testMember2;

    @BeforeEach
    void setUp() {
        fitnessManagement = new FitnessManagement();
        testMember1 = new Member("John Doe", 30, 75.0, 1.75);
        testMember2 = new Member("Jane Smith", 28, 65.0, 1.68);
    }

    @Test
    void testAddMember() {
        fitnessManagement.addMember(testMember1);
        List<Member> members = fitnessManagement.getAllMembers();
        assertFalse(members.isEmpty());
        assertNotNull(members.get(0));
        assertEquals("John Doe", members.get(0).getName());
    }

    @Test
    void testGetAllMembers() {
        fitnessManagement.addMember(testMember1);
        fitnessManagement.addMember(testMember2);
        List<Member> members = fitnessManagement.getAllMembers();
        assertTrue(members.size() > 1);
    }

    @Test
    void testUpdateMember() {
        fitnessManagement.addMember(testMember1);
        Member updatedMember = new Member("John Doe Updated", 31, 80.0, 1.80);
        fitnessManagement.updateMember(0, updatedMember);
        Member retrievedMember = fitnessManagement.getAllMembers().get(0);
        assertNotSame(testMember1, retrievedMember);
        assertSame(updatedMember, retrievedMember);
    }

    @Test
    void testDeleteMember() {
        fitnessManagement.addMember(testMember1);
        assertTrue(fitnessManagement.getAllMembers().contains(testMember1));
        fitnessManagement.deleteMember(0);
        assertFalse(fitnessManagement.getAllMembers().contains(testMember1));
    }

    @Test
    void testCalculateMemberBMI() {
        fitnessManagement.addMember(testMember1);
        double expectedBMI = 75.0 / (1.75 * 1.75);
        double actualBMI = fitnessManagement.calculateMemberBMI(0);
        assertTrue(Math.abs(expectedBMI - actualBMI) < 0.01);
    }
}
